package com.athena.meerkat.controller.web.domain;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Id;

import com.athena.meerkat.controller.web.datagridserver.DatagridServerGroup;
import com.athena.meerkat.controller.web.tomcat.instance.TomcatInstance;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * A domain is used for grouping one or more tomcat instance. It is associated
 * to domain table in database
 * 
 * @author Tran Ho
 * 
 */
@Entity
@Table(name = "domain")
public class Domain implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "Id")
	private int id;
	@Column(name = "name")
	private String name;
	@Column(name = "is_clustering")
	private boolean isClustering;
	
	@OneToOne
	@JoinColumn(name="datagrid_server_group_id")
	private DatagridServerGroup serverGroup;

	@OneToMany(mappedBy = "domain")
	@JsonManagedReference
	private Collection<TomcatInstance> tomcats;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isClustering() {
		return isClustering;
	}

	public void setClustering(boolean isClustering) {
		this.isClustering = isClustering;
	}


	public Collection<TomcatInstance> getTomcats() {
		return tomcats;
	}

	public void setTomcats(Collection<TomcatInstance> tomcats) {
		this.tomcats = tomcats;
	}

	/**
	 * Constructor
	 */
	public Domain() {
	}

	public Domain(String name, boolean is_clustering) {
		this.name  = name;
		this.isClustering = is_clustering;
	}
	
	public int getTomcatInstancesCount (){
		return tomcats.size();
	}
	
	public String getDatagridServerGroupName(){
		if (getServerGroup() != null){
			return this.getServerGroup().getName();
		}
		return "";
	}

	public DatagridServerGroup getServerGroup() {
		return serverGroup;
	}

	public void setServerGroup(DatagridServerGroup serverGroup) {
		this.serverGroup = serverGroup;
	}
}
